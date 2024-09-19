import { useEffect, useState } from "react";
import InfiniteScroll from "../../core/infinite-scroll";
import ProductItem from "./product-item";
import { Input, Space, Spin, Typography } from "antd";
import { debounce } from "../../../helpers/debounce";
import { fetchProduct, LIMIT, searchProduct } from "../../../services";
import { IProduct } from "../../../services/product/response.model";


export default function ProductList() {
    const [currentSkip, setCurrentSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [data, setData] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        const res = await fetchProduct(currentSkip);
        if (res) {
            setData([...data, ...res.products]);
            setTotal(res.total);
        }
        setLoading(false);
    }
    const searchData = async (search: string) => {
        setLoading(true);
        const res = await searchProduct(search);
        if (res) {
            setData(res.products);
            setTotal(res.total);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData()
    }, [currentSkip]);

    const handleSearch = debounce((e) => {
        setCurrentSkip(0);
        searchData(e.target.value)
    }, 300)
    return (
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
            <Typography.Title className="text-center">Product List</Typography.Title>
            <Input placeholder="Search product" onInput={handleSearch} />
            {!loading && data.length === 0 ? <Typography.Text className="text-center">There are no products</Typography.Text> :
                <InfiniteScroll
                    loader={<Spin />}
                    className="mx-auto"
                    fetchMore={() => setCurrentSkip((prev) => prev + LIMIT)}
                    loadMore={data.length < total}
                >
                    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                        {data.map((product: IProduct, index: number) => (
                            <ProductItem data={product} key={index} />
                        ))}
                    </Space>
                </InfiniteScroll>}
        </Space>
    );
}