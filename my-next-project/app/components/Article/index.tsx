import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import {News} from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";     
type Props={
    data: News;
};
export default function Article({data}:Props){
    return(
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
                <Link href={`/news/category/${data.category.id}`} className={styles.categoryLink}>
                    <Category category={data.category} />
                </Link>
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            {data.thumbnail && (
                <Image
                    src={data.thumbnail.url}
                    alt=""
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                    className={styles.thumbnail}
                />
            )}
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />  
            </div>
        </main>)};