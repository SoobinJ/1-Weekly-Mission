import Button from "../button/Button";
import DefaultModalLayout from "./defaultModalLayout/DefaultModalLayout";

interface DeleteModalProp {
  title: string;
  content: {
    id: number;
    title?: string;
    url?: string;
  };
}

const DeleteModal = ({ title, content }: DeleteModalProp) => {
  return (
    <DefaultModalLayout
      title={title}
      buttonItem={<Button>삭제하기</Button>}
      subTitle={content.title || content.url}
    />
  );
};

export default DeleteModal;
