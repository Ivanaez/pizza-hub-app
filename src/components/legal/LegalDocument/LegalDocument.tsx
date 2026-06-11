import styles from "./LegalDocument.module.css";

type LegalDocumentProps = {
  content: string;
};

type LegalContentBlock = {
  type: "heading" | "paragraph";
  level?: number;
  text: string;
};

function getLegalContentBlocks(content: string) {
  const blocks: LegalContentBlock[] = [];
  const paragraphLines: string[] = [];

  const addParagraph = () => {
    if (paragraphLines.length === 0) return;

    blocks.push({
      type: "paragraph",
      text: paragraphLines.join(" "),
    });

    paragraphLines.length = 0;
  };

  content.trim().split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      addParagraph();
      return;
    }

    const headingMatch = /^(#{1,3})\s+(.+)$/.exec(trimmedLine);

    if (headingMatch) {
      addParagraph();

      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });

      return;
    }

    paragraphLines.push(trimmedLine);
  });

  addParagraph();

  return blocks;
}

// Legal document card
export function LegalDocument({ content }: LegalDocumentProps) {
  const contentBlocks = getLegalContentBlocks(content);

  return (
    // Document card
    <article className={styles.legalDocument}>
      {/* Document content */}
      {contentBlocks.map((block, index) => {
        if (block.type === "heading" && block.level === 1) {
          return (
            <h1 key={`${block.text}-${index}`} className={styles.documentTitle}>
              {block.text}
            </h1>
          );
        }

        if (block.type === "heading") {
          return (
            <h2 key={`${block.text}-${index}`} className={styles.documentHeading}>
              {block.text}
            </h2>
          );
        }

        return (
          <p key={`${block.text}-${index}`} className={styles.documentText}>
            {block.text}
          </p>
        );
      })}
    </article>
  );
}
