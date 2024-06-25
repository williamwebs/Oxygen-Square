import Link from "next/link";

const Btn = ({ href, text }) => {
  return (
    <Link href={href} className="button">
      {text}
    </Link>
  );
};

export default Btn;
