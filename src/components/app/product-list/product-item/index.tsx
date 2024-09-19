import { Card, Typography } from "antd"
import { IProduct } from "../../../../services/product/response.model"

type ItemProps = {
    data: IProduct
}
export default function ProductItem({ data }: ItemProps) {
    return (
        <Card>
            <Typography.Title level={3}>{data.title}</Typography.Title>
            <div className="flex flex-row">
                <img src={data.thumbnail} alt={data.thumbnail} />
                <div>
                    <p><strong>Description:</strong> {data.description}</p>
                    <p><strong>Price:</strong> ${(data.price * (1 - data.discountPercentage / 100)).toFixed(2)} <span style={{ textDecoration: 'line-through' }}>(${data.price.toFixed(2)})</span></p>
                    <p><strong>Brand:</strong> {data.brand}</p>
                    <p><strong>Rating:</strong> {data.rating} / 5</p>
                    <p><strong>Available:</strong> {data.availabilityStatus}</p>
                    <p><strong>Warranty Information:</strong> {data.warrantyInformation}</p>
                    <p><strong>Shipping:</strong> {data.shippingInformation}</p>
                    <p><strong>Return policy:</strong> {data.returnPolicy}</p>
                    <p><strong>Minimum order quantity:</strong> {data.minimumOrderQuantity}</p>
                    <p><strong>Weight:</strong> {data.weight}g</p>
                    <p><strong>Size:</strong> {data.dimensions.width} x {data.dimensions.height} x {data.dimensions.depth} mm</p>

                </div>
            </div>

        </Card>
    )
}