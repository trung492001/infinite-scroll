import { ReactNode, useEffect, useRef } from "react";

type Props = {
    children: ReactNode,
    loader: ReactNode,
    fetchMore: () => void;
    loadMore: boolean;
    className: string;
}

const InfiniteScroll = ({
    children,
    loader,
    fetchMore,
    loadMore,
    className,
}: Props) => {
    const loadRef = useRef(null);
    useEffect(() => {
        if (loadMore) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    fetchMore();
                }
            }, {
                threshold: 1
            });

            if (loadRef.current) {
                observer.observe(loadRef.current);
            }

            return () => {
                if (loadRef.current) {
                    observer.unobserve(loadRef.current);
                }
            };
        }
    }, [loadMore, loadRef]);
    return (
        <div className={className}>
            {children}

            {loadMore ? <div ref={loadRef}>{loader}</div> : null}
        </div>
    );
};

export default InfiniteScroll;