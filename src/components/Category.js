import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Category = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([])

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category/`, {category}, config);
                setBlogs(response.data);
            } catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (category) => {
        if (category)
            return category.charAt(0).toUpperCase() + category.slice(1);
        return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">
                            {capitalizeFirstLetter(blogPost.category)}
                        </strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width="200" height="250" src={blogPost.thumbnail} alt={blogPost.thumbnail_description}/>
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className="row mb-2">
                    <div className="col-md-6">
                        {list[i]}
                    </div>
                    <div className="col-md-6">
                        {list[i + 1] ? list[i + 1] : null}
                    </div>
                </div>
            )
        }
        return result;
    };


    return (
        <div className="container mt-3">
            <h3 className="display-4">{currentCategory} Category</h3>
            <hr />
            {getCategoryBlogs()}
        </div>
    );
};

export default Category;