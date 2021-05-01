import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog_detail = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`)
                setBlog(response.data);
            }
            catch (err) {

            }
        };
         fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };

    const capitalizeFirstLetter = (category) => {
        if (category)
            return category.charAt(0).toUpperCase() + category.slice(1);
        return '';
    };

    return (
        <div className="container mt-3">
            <h1 className="display-2">{blog.title}</h1>
            <h2 className="text-muted mt-3">{capitalizeFirstLetter(blog.category)} </h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className="my-5" dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5"><Link to="/" className="font-weight-bold">Back to Blogs</Link></p>
        </div>
    );
};

export default Blog_detail;