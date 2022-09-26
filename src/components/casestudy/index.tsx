import React from "react";
import { Col, Tag } from "antd";

function Casestudy() {
    return(
        <>
            <Col className="md:h-[15rem] h-auto" span={8} xs={24} sm={24} md={12} lg={8}>
                <div className="border-solid border-slate-100 border-2 rounded-lg p-6 h-[20rem] bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md">
                    <Tag className="rounded-3xl text-white border-none bg-[rgba(0,0,0,.5)] p-2 pl-4 pr-4 font-bold text-md">CASE STUDY</Tag>
                </div>
            </Col>
        </>
    )
}

export default Casestudy;