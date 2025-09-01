"use client";

import { motion } from "framer-motion";
import type { Article } from "@/data/articles";

type ArticlesProps = {
  items: Article[];
};

const Articles = ({ items }: ArticlesProps) => {
  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Latest <span className="text-gradient">Articles</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A curated list of reads from our community and beyond. Add your own
            by editing the simple list in <code>data/articles.ts</code>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {items.map((a, i) => (
            <motion.a
              key={`${a.name}-${i}`}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              viewport={{ once: true }}
              className="card p-6 md:p-8 hover:shadow-xl transition-shadow duration-200 group space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {a.name}
                </h3>
                <span className="text-xs text-primary-700 bg-primary-50 px-2 py-1 rounded-full whitespace-nowrap">
                  Read
                </span>
              </div>
              <div className="text-gray-600 flex flex-col gap-2 leading-relaxed">
                <p>
                  Written by{" "}
                  <span className="font-medium text-gray-800">
                    {a.writtenBy}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Researched by{" "}
                  <span className="font-medium text-gray-700">
                    {a.researchedBy}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{a.date}</p>
              </div>
              <p className="text-sm text-gray-500 truncate">{a.link}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
