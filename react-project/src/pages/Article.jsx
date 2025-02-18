import { useParams } from "react-router-dom";
import articles from "../article-content"


export default function Article(){
    const params = useParams();
    const name = params.name;
    const article = articles.find(a => a.name === name);


    return(

        <> 
            <h1>{article.title}</h1>
            {article.content.map(par => <p key={par}> {par} </p >)}
        </>
    );
}