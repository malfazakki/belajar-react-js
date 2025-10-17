import useFetch from "../hooks/useFetch";

export default function PostViewer({ postId }) {
	const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

	if (loading) return <p>Sedang memuat data...</p>;
	if (error) return <p>Terjadi kesalahan.</p>;
	if (!data) return <p>Artikel tidak ditemukan.</p>;

	return (
		<>
			<div>
				<h1>{data.title}</h1>
				<p>{data.body}</p>
			</div>
		</>
	);
}
