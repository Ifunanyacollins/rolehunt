import React, { useState } from "react";
import { Col, Tag, Modal, Row } from "antd";

function Casestudy() {
     const [open, setOpen] = useState(false);
    return(
        <>
            <Col className="md:h-[15rem] h-auto" span={8} xs={24} sm={24} md={12} lg={8} onClick={() => setOpen(true)}>
                <div className="border-solid border-slate-100 border-2 rounded-lg p-6 h-[20rem] bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md">
                    <Tag className="rounded-3xl text-white border-none bg-[rgba(0,0,0,.5)] p-2 pl-4 pr-4 font-bold text-md">CASE STUDY</Tag>
                </div>
            </Col>



            <Modal
                title="Project Details"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={6} lg={6} className="h-[30rem] p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div>Project out look</div>
                    </Col>

                    <Col xs={24} sm={24} md={16} lg={16}>
                        <h4>Project Description</h4>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default Casestudy;