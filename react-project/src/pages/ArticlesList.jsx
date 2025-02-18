import articles from "../article-content.js";
import { Link } from "react-router-dom";
import ArticlesListComponent from "../ArticlesListComponent.jsx";


export default function ArticlesList(){
    return(
        <>
            <h1>Articles</h1>
            <ArticlesListComponent articles={articles} />
        </>
    );
}