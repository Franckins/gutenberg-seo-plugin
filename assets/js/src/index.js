import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import SeoMetaFields from "./components/SeoMetaFields";
import "./editor.scss"; // Подключаем стили

registerPlugin("seo-meta-fields", {
  render: () => (
    <>
      <PluginSidebarMoreMenuItem
        target="seo-meta-fields-sidebar"
        icon="admin-site"
      >
        {__("SEO Meta Fields", "gutenberg-seo-plugin")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="seo-meta-fields-sidebar"
        title={__("SEO Meta Fields", "gutenberg-seo-plugin")}
        icon="admin-site"
      >
        <div className="seo-meta-fields">
          <SeoMetaFields />
        </div>
      </PluginSidebar>
    </>
  ),
});
