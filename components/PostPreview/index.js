import Date from "../Date";

export default function PostPreview({ postData }) {
  return (
    <div>
      <h2>{postData.title}</h2>
      <a className="text-xs">
        <Date dateString={postData.date} />
      </a>

      <div
        className="prose h-24 w-300 overflow-hidden overflow-ellipsis text-transparent bg-clip-text bg-gradient-to-b from-black"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </div>
  );
}
