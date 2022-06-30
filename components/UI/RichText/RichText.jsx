import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Fragment } from "react";
import Link from "next/link";

const renderOptions = () => {
  // const { imageLayout } = props;
  const assetMap = new Map();

  // const entryMap = new Map();
  // if (links) {
  //   if (links.entries?.hyperlink?.length) {
  //     for (const asset of links.entries.hyperlink) {
  //       assetMap.set(asset.sys.id, asset);
  //     }
  //   }
  //   if (links.assets?.hyperlink?.length) {
  //     for (const asset of links.assets.hyperlink) {
  //       assetMap.set(asset.sys.id, asset);
  //     }
  //   }
  //   if (links?.assets?.block) {
  //     for (const asset of links?.assets?.block) {
  //       assetMap.set(asset.sys.id, asset);
  //     }
  //   }
  //   // loop through the block linked entries and add them to the map
  //   if (links?.entries?.block) {
  //     for (const entry of links.entries.block) {
  //       entryMap.set(entry.sys.id, entry);
  //     }
  //   }
  // }

  return {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const entry = assetMap.get(node.data.target.sys.id);
        return (
          <Link href={`/${entry.slug}`}>
            <a>{children}</a>
          </Link>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        // If you are using contenful.js sdk, the referenced entry is resolved
        // automatically and is available at `node.data.target`.
        const asset = assetMap.get(node.data.target.sys.id);
        if (asset) {
          return (
            <a href={asset.url} target="_blank" rel="noreferrer">
              {children}
            </a>
          );
        } else {
          return <a href="#">{children}</a>;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return (
          <img
            src={asset.url}
            alt={asset.title}
            width={asset.width}
            height={asset.height}
          />
        );
      },
    },
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
};

const RichText = ({ children }) => {
  return (
    <Fragment>{documentToReactComponents(children, renderOptions())}</Fragment>
  );
};

export default RichText;
