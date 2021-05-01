import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured/`);
                setFeaturedBlog(response.data[0]);
            }
            catch (err) {

            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(response.data);
            }
            catch (err) {

            }
        }
        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (category) => {
        if (category)
            return category.charAt(0).toUpperCase() + category.slice(1);
        return '';
    };

    const getBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">
                            {capitalizeFirstLetter(blogPost.category)}
                        </strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.day} {blogPost.month} {blogPost.year}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width="200" height="250" src={blogPost.thumbnail} alt={blogPost.thumbnail_description} />
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

     // Animations
    const featuredBlogProps = useSpring({
        opacity: 1,
        marginLeft: 0,
        from: { opacity:0, marginLeft: -3500,},
    });

    return (
        <div className="container mt-3">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-navy">
                <animated.div style={featuredBlogProps} className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-white fw-bold">
                            Continue reading...
                        </Link>
                    </p>
                </animated.div>
            </div>

          {getBlogs()}

        </div>
    );

};

export default Blog;