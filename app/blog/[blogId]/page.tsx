interface BlogIdPageProps {
  params: Promise<{
    blogId: string;
  }>;
}

const BlogIdPage = async ({ params }: BlogIdPageProps) => {
  const { blogId } = await params;
  return (
    <div>
      <h1>This is Blog Id page</h1>
      <p>blog id: {blogId}</p>
    </div>
  );
};

export default BlogIdPage;
