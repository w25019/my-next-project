import { getNewsList } from "../_libs/microcms";
import NewsList from "../components/NewsList";
import Pagination from "@/app/components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import SearchField from "../components/SearchField";
export const revalidate=60;
export default async function Page() {
    const {contents:news,totalCount} = await getNewsList({
        limit: NEWS_LIST_LIMIT
    });
    return (
        <>
        <SearchField/>
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    );
}