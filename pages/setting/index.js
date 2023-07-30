import { useState } from "react";
import LeftNavigation from "@/components/setting/LeftNavigation";
import EmailSetting from "@/components/setting/EmailSetting";
import PasswordSetting from "@/components/setting/PasswordSetting";
import IdentitySetting from "@/components/setting/IdentitySetting";
import PhoneSetting from "@/components/setting/PhoneSetting";
import DeletionSetting from "@/components/setting/DeletionSetting";
import Head from "next/head";
import Wrapper from "@/components/common/Wrapper/Wrapper";
import classes from "./setting.module.css";

const SettingsPage = () => {
  const [selectedOption, setSelectedOption] = useState("identity");

  const renderComponent = () => {
    switch (selectedOption) {
      case "identity":
        return <IdentitySetting />;
      case "email":
        return <EmailSetting />;
      case "password":
        return <PasswordSetting />;
      case "phone":
        return <PhoneSetting />;
      case "deletion":
        return <DeletionSetting />;
    }
  };

  return (
    <Wrapper>
      <Head>
        <title>Setting</title>
      </Head>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginLeft: "2.5rem",
          marginTop: "2rem",
        }}
      >
        My Setting
      </h1>
      <div className={classes.container}>
        <LeftNavigation setSelectedOption={setSelectedOption} />
        <div style={{ flex: 1 }}>{renderComponent()}</div>
      </div>
    </Wrapper>
  );
};

export default SettingsPage;
