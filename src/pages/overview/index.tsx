import { Avatar, Typography } from "antd";
import arrow from "../../assest/svgs/arrow.svg";
import camera from "../../assest/svgs/camera.svg";
import download from "../../assest/svgs/download.svg";
import { PaperIcon } from "../../components/icon";
import channelsJson from "../../json/channel.json";
import { CalculatorOutlined } from "@ant-design/icons";
const { Title, Text, Paragraph } = Typography;

function OverWiew() {
  const boardClasses =
    "border border-dashed hover:border-solid cursor-pointer border-blue-400 rounded-xl";

  return (
    <section>
      <Title level={2}>Welcome back! 🎉</Title>
      <Text>Get all the resources you need to nail your next interview</Text>
      <hr className="mt-5  mb-14" />

      <div className="lg:mx-20 md:mx-12 mx-5">
        <Paragraph className="text-base text-gray-500">
          <strong className="text-black">Feeling geared?</strong> Try practicing
          with any of these actions
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://grow.google/certificates/interview-warmup/"
          >
            <div className={`aspect-square ${boardClasses} `}>
              <img
                src={arrow}
                className="w-44 h-44  m-auto block mt-4"
                alt="Arrow"
              />

              <Title className="text-center" level={5}>
                Warmup by Google
              </Title>
              <Text className="text-center block">
                Practice key questions and get insights about your answers.
              </Text>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/c/Indeed"
          >
            <div className={`aspect-square ${boardClasses} `}>
              <img
                src={camera}
                className="w-44 h-44 m-auto block mt-4"
                alt="overview"
              />
              <Title className="text-center" level={5}>
                Scenarios by Indeed
              </Title>
              <Text className="text-center block">
                Practice key Interview & Workplace Scenarios
              </Text>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/c/Indeed"
          >
            <div className={`aspect-square ${boardClasses} `}>
              <img
                src={download}
                className="w-44 h-44 m-auto block mt-4"
                alt="download"
              />
              <Title className="text-center" level={5}>
                Resources by Ulo
              </Title>
              <Text className="text-center block">
                Practice with our commuity created resources
              </Text>
            </div>
          </a>
        </div>
      </div>

      <Text>We have made a list of job boards to help you get started</Text>
      <div className="my-5">
        <Title level={5}>Channels</Title>

        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {channelsJson.map((channel) => (
            <a rel="noreferrer" target="_blank" href={channel.url}>
              <div className=" h-20 border border-solid border-gray-300 rounded flex items-center px-2 space-x-5 overflow-hidden">
                <Avatar src={channel.logo} />
                <div>
                  <Text className="text-xs">{channel.region}</Text>
                  <Title level={5} style={{ marginTop: "0px" }}>
                    {channel.name}
                  </Title>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="my-10">
        <Title level={5}>Get Help</Title>

        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/jobs/?showResumeBuilderModal=true"
          >
            <div className=" h-20 border border-solid border-gray-300 rounded flex items-center px-2 space-x-5 overflow-hidden">
              <Avatar icon={<PaperIcon />} />
              <div>
                <Text className="text-xs">Resume Builder</Text>
                <Title level={5} style={{ marginTop: "0px" }}>
                  LinkedIn Resume Builder
                </Title>
              </div>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://relocate.me/net-pay-calculators"
          >
            <div className=" h-20 border border-solid border-gray-300 rounded flex items-center px-2 space-x-5 overflow-hidden">
              <Avatar icon={<CalculatorOutlined />} />
              <div>
                <Text className="text-xs">Calculator</Text>
                <Title level={5} style={{ marginTop: "0px" }}>
                  Net Pay Calculators by Relocate
                </Title>
              </div>
            </div>
          </a>

          <a rel="noreferrer" target="_blank" href="#none">
            <div className=" h-20 border border-solid border-gray-300 rounded flex items-center px-2 space-x-5 overflow-hidden">
              <Avatar icon={<PaperIcon />} />
              <div>
                <Text className="text-xs">Mentor Finder</Text>
                <Title level={5} style={{ marginTop: "0px" }}>
                  Find Mentor by Ulo
                </Title>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OverWiew;
