import { FunctionComponent } from "react";
import TagList from "./tag-list";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { getFormattedDate } from "../helpers/date";

type PostCardProps = {
  tags?: string[];
  title: string;
  description?: string;
  coveredImage?: { url: string };
  publishedAt: string;
  id: string;
};

const PostCard: FunctionComponent<PostCardProps> = (props) => {
  const { tags, title, description, coveredImage, publishedAt, id } = props;

  return (
    <div className="relative">
      <div className="w-full h-full">
        <div className="w-full lg:h-44 bg-white">
          <img
            src={coveredImage?.url}
            alt="test"
            className="object-contain h-auto lg:h-44 w-full"
          />
        </div>
        <div className="p-4 bg-white dark:bg-cool-gray-800">
          {tags && <TagList tags={tags}></TagList>}
          <h2 className="mt-2 mb-0 text-2xl font-semibold dark:text-cool-gray-100">
            {title}
          </h2>
          <time className="mb-3 text-cool-gray-600 dark:text-cool-gray-300 flex items-center text-sm">
            <FontAwesomeIcon
              className={`mr-2 h-3`}
              icon={faClock}
            ></FontAwesomeIcon>
            {getFormattedDate(publishedAt)}
          </time>
          <p className="text-cool-gray-500 dark:text-cool-gray-300">
            {description}
          </p>
        </div>
      </div>

      <Link href={`./blog/${id}`}>
        <a className="absolute inset-0"></a>
      </Link>
    </div>
  );
};

export default PostCard;
