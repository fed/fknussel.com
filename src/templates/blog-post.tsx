import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../components/layout';
import { Post } from '../components/post';
import { SEO } from '../components/seo';
import { categories } from '../data';
import type { Query } from '../../graphql-types';

interface Props {
    data: Query;
}

const BlogPostTemplate: React.FC<Props> = ({ data }) => {
    const post = data.markdownRemark;
    const categoryId = post.frontmatter.category;
    const category = categories.find((category) => category.id === categoryId);

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.spoiler}
                slug={post.fields.slug}
            />
            <Layout>
                <Post
                    title={post.frontmatter.title}
                    body={post.html}
                    date={post.frontmatter.date}
                    category={category.title}
                    timeToRead={post.timeToRead}
                />
            </Layout>
        </>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            timeToRead
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                spoiler
                category
            }
            fields {
                slug
            }
        }
    }
`;

export default BlogPostTemplate;
