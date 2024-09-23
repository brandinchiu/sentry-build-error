import React from "react";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { Avatar } from "@/components/catalyst/avatar";
import { SidebarItem, SidebarLabel } from "@/components/catalyst/sidebar";
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";

export default function TeamSelector() {
  return (
    <Dropdown>
      <DropdownButton as={SidebarItem} className="lg:mb-2.5">
        <Avatar src="https://catalyst.tailwindui.com/tailwind-logo.svg" />
        <SidebarLabel>Tailwind Labs</SidebarLabel>
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
        <DropdownItem href="/teams/1/settings">
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/teams/1">
          <Avatar
            slot="icon"
            src="https://catalyst.tailwindui.com/tailwind-logo.svg"
          />
          <DropdownLabel>Tailwind Labs</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="/teams/2">
          <Avatar
            slot="icon"
            initials="WC"
            className="bg-purple-500 text-white"
          />
          <DropdownLabel>Workcation</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/teams/create">
          <PlusIcon />
          <DropdownLabel>New team&hellip;</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
