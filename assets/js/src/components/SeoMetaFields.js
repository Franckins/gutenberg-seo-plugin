import {
  TextControl,
  TextareaControl,
  ToggleControl,
} from "@wordpress/components";
import { useEntityProp } from "@wordpress/core-data";
import { useSelect, useDispatch } from "@wordpress/data";
import { useRef, useEffect } from "@wordpress/element";

const SeoMetaFields = () => {
  const postTypeRef = useRef(null);
  const { editPost } = useDispatch("core/editor");

  const postType = useSelect((select) => {
    if (!postTypeRef.current) {
      postTypeRef.current = select("core/editor").getCurrentPostType();
    }
    return postTypeRef.current;
  }, []);

  const [meta, setMeta] = useEntityProp("postType", postType, "meta");

  const updateMeta = (key, value) => {
    const newMeta = { ...meta, [key]: value };
    setMeta(newMeta);
    editPost({ meta: newMeta });
  };

  useEffect(() => {
    postTypeRef.current = postType;
  }, [postType]);

  return (
    <>
      <TextControl
        label="Meta Title"
        value={meta.meta_title || ""}
        onChange={(value) => updateMeta("meta_title", value)}
      />
      <TextareaControl
        label="Meta Description"
        value={meta.meta_description || ""}
        onChange={(value) => updateMeta("meta_description", value)}
      />
      <TextControl
        label="Meta Keywords"
        value={meta.meta_keywords || ""}
        onChange={(value) => updateMeta("meta_keywords", value)}
      />
      <TextControl
        label="Canonical URL"
        value={meta.canonical_url || ""}
        onChange={(value) => updateMeta("canonical_url", value)}
      />
      <ToggleControl
        label="Robots Meta"
        checked={meta.robots_meta || false}
        onChange={(value) => updateMeta("robots_meta", value)}
      />
    </>
  );
};

export default SeoMetaFields;
