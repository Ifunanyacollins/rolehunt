import React, { useState } from "react";
import { Col, Tag, Modal, Row } from "antd";
import Image from "../s3Image";

type CaseStudyProps = {
  imgKey: string;
  name: string;
  caseStudie: string;
};
function Casestudy({ imgKey, name, caseStudie }: CaseStudyProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Col
        className="md:h-[15rem] h-auto cursor-pointer"
        span={8}
        xs={24}
        sm={24}
        md={12}
        lg={8}
        onClick={() => setOpen(true)}
      >
        <div className="border-solid border-slate-100 border-2 rounded-lg p-6 h-[20rem]  hover:shadow-md">
          <Tag className="rounded-3xl absolute text-white border-none bg-[rgba(0,0,0,.5)] p-2 pl-4 pr-4 font-bold text-md">
            CASE STUDY
          </Tag>

          <Image imgKey={imgKey} name={name} />
        </div>
      </Col>

      <Modal
        title="Project Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
        width={1000}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={24} md={6} lg={6} className=" p-10">
            <Image imgKey={imgKey} name={name} />
          </Col>

          <Col xs={24} sm={24} md={16} lg={16}>
            <p>{caseStudie}</p>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default Casestudy;
