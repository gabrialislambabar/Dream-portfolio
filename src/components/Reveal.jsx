import { motion, useReducedMotion } from 'motion/react';

const TAGS = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  footer: motion.footer,
  article: motion.article,
  aside: motion.aside,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  figure: motion.figure,
  p: motion.p,
  span: motion.span,
};

export default function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  distance = 18,
  once = true,
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = TAGS[as] ?? motion.div;

  if (reduced) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.72, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
