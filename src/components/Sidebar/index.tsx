import React from "react";
import Input from "@/components/Form/Input";
import Icon from "@/components/Icon";
import sidebarStyle from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  return (
    <div className={sidebarStyle.sidebar}>
      <form>
        <Input renderLeftIcon={<Icon icon="search" size={20} />} label="test" placeholder="Aramak istediğin ürünü yaz." />
      </form>
    </div>
  );
};

export default Sidebar;
