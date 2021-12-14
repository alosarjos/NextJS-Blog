import Date from "../Date";

export default function PostPreview({ postData }) {
  return (
    <div>
      <h2>{postData.title}</h2>
      <a className="text-xs">
        <Date dateString={postData.date} />
      </a>

      <div
        className="prose h-20 w-300 overflow-hidden overflow-ellipsis"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </div>
  );
}
