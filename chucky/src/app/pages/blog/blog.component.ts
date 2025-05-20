import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface BlogPost {
  title: string;
  date: string;
  content: string;
  html?: SafeHtml;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadBlogPosts();
  }

  async loadBlogPosts() {
    // List of blog markdown files (in a real app, automate this or fetch from API)
    const blogFiles = [
      'first-pixel-blog.md',
      'second-pixel-blog.md'
    ];
    const posts: BlogPost[] = [];
    for (const file of blogFiles) {
      const res = await fetch(`/blogs/${file}`);
      const text = await res.text();
      const post: BlogPost = this.parseMarkdown(text);
      // Explicitly ensure post.content is a string
      post.html = this.sanitizer.bypassSecurityTrustHtml(marked.parse(post.content as string));
      posts.push(post);
    }
    // Sort by date descending
    this.blogPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  }

  parseMarkdown(md: string): BlogPost {
    // Simple frontmatter parser
    const match = md.match(/^---([\s\S]*?)---([\s\S]*)$/);
    let title = 'Untitled';
    let date = '';
    let content = md;
    if (match) {
      const frontmatter = match[1];
      content = match[2].trim();
      const titleMatch = frontmatter.match(/title:\s*['"]?(.+?)['"]?$/m);
      const dateMatch = frontmatter.match(/date:\s*['"]?(.+?)['"]?$/m);
      if (titleMatch) title = titleMatch[1];
      if (dateMatch) date = dateMatch[1];
    }
    // Always return content as a string
    return { title, date, content: String(content) };
  }
} 