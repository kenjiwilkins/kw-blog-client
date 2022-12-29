import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import BlogHeader from "@/components/BlogHeader.vue";

describe("BlogHeader", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(BlogHeader);
    expect(wrapper.text()).toContain("KW BLOG");
  });
});
