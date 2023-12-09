const BlogContent = ({ data }) => {
  return (
    <div className="mt-[20px] mb-[50px] prose prose-slate lg:prose-lg max-w-4xl" dangerouslySetInnerHTML={{ __html: data }} />
  )
}

export default BlogContent