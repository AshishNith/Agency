import React, { useState, useEffect } from 'react';
import { Mail, Tag, X } from 'lucide-react';

const blogPosts = [
	{
		id: 1,
		title: 'Building AI Agents: A Guide for Modern Businesses',
		excerpt:
			'Learn how custom AI agents can transform your business operations, from customer service to data analysis.',
		image: 'https://images.unsplash.com/photo-1677442136019-21780ecad095',
		category: 'AI Agents',
		date: 'Mar 15, 2024',
		readTime: '8 min read',
		tags: ['AI', 'Automation', 'Business'],
		author: {
			name: 'Ashish Ranjan',
			avatar:
				'https://media.licdn.com/dms/image/v2/D5603AQF-pv9gNqRAHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727822390724?e=1754524800&v=beta&t=7GH9gr6mDHWE5o-GkRF7okemDuBcxfM6JCGijSVEHlw',
		},
	},
	{
		id: 2,
		title: 'From Zero to Launch: Building a Tech Startup in 2024',
		excerpt:
			'Our journey of building GoRan, challenges faced, and lessons learned in the Indian tech ecosystem.',
		image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
		category: 'Startup',
		date: 'Mar 10, 2024',
		readTime: '12 min read',
		tags: ['Startup', 'Entrepreneurship', 'Tech'],
		author: {
			name: 'Atharv Golait',
			avatar:
				'https://media.licdn.com/dms/image/v2/D4D35AQEP8_8EaQfmyA/profile-framedphoto-shrink_400_400/B4DZdBXZ5YHkAc-/0/1749148344291?e=1749906000&v=beta&t=jeBL3lOQYPVoT9mpyQTyQvAMY1y52qfCnXJWOx8__2c',
		},
	},
	{
		id: 3,
		title: 'Essential AI Tools for Modern Web Development',
		excerpt:
			'A curated list of AI tools and frameworks that are revolutionizing web development in 2024.',
		image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2',
		category: 'Tools',
		date: 'Mar 5, 2024',
		readTime: '10 min read',
		tags: ['Web Development', 'AI Tools', 'Coding'],
		author: {
			name: 'Ashish Ranjan',
			avatar:
				'https://media.licdn.com/dms/image/v2/D5603AQF-pv9gNqRAHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727822390724?e=1754524800&v=beta&t=7GH9gr6mDHWE5o-GkRF7okemDuBcxfM6JCGijSVEHlw',
		},
	},
	{
		id: 4,
		title: 'Mastering Prompt Engineering for GPT Models',
		excerpt:
			'Advanced techniques and best practices for crafting effective prompts that get better results from AI models.',
		image: 'https://images.unsplash.com/photo-1676699064111-4e53f6565395',
		category: 'AI',
		date: 'Feb 28, 2024',
		readTime: '15 min read',
		tags: ['GPT', 'Prompt Engineering', 'AI'],
		author: {
			name: 'Atharv Golait',
			avatar:
				'https://media.licdn.com/dms/image/v2/D4D35AQEP8_8EaQfmyA/profile-framedphoto-shrink_400_400/B4DZdBXZ5YHkAc-/0/1749148344291?e=1749906000&v=beta&t=jeBL3lOQYPVoT9mpyQTyQvAMY1y52qfCnXJWOx8__2c',
		},
	},
	{
		id: 5,
		title: 'The Future of Web Development with AI Integration',
		excerpt:
			'Exploring how AI is reshaping web development and what developers need to know to stay ahead.',
		image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5',
		category: 'Tech',
		date: 'Feb 20, 2024',
		readTime: '8 min read',
		tags: ['Future Tech', 'AI', 'Web Development'],
		author: {
			name: 'Ashish Ranjan',
			avatar:
				'https://media.licdn.com/dms/image/v2/D5603AQF-pv9gNqRAHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727822390724?e=1754524800&v=beta&t=7GH9gr6mDHWE5o-GkRF7okemDuBcxfM6JCGijSVEHlw',
		},
	},
];

const Blog = () => {
	const [selectedBlog, setSelectedBlog] = useState(null);

	// Add escape key handler
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		};

		if (selectedBlog) {
			window.addEventListener('keydown', handleEscape);
			// Lock body scroll
			document.body.style.overflow = 'hidden';
		}

		return () => {
			window.removeEventListener('keydown', handleEscape);
			// Restore body scroll
			document.body.style.overflow = 'unset';
		};
	}, [selectedBlog]);

	const closeModal = () => {
		// Add fade out animation
		const modal = document.querySelector('.blog-modal');
		if (modal) {
			modal.classList.add('fade-out');
			setTimeout(() => {
				setSelectedBlog(null);
			}, 200);
		} else {
			setSelectedBlog(null);
		}
	};

	// Add modal close handler
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	// Add modal open handler
	const openBlogDetail = (post) => {
		setSelectedBlog(post);
		document.body.style.overflow = 'hidden';
	};

	return (
		<div className="relative min-h-screen bg-transparent text-white px-6 sm:px-12 md:px-20 lg:px-32 py-28 font-sans z-10">
			{/* Top Section */}
			<section className="text-center mb-24">
				<h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4 text-white">
					GoRan Blog
				</h1>
				<p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed opacity-90">
					Insights, ideas, and innovations in AI, automation, and modern web
					development — powered by GoRan.
				</p>
			</section>

			{/* Blog Posts Grid - Updated with click handler */}
			<section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{blogPosts.map((post) => (
					<article
						key={post.id}
						className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer"
						onClick={() => openBlogDetail(post)}
					>
						<div className="relative h-48 overflow-hidden">
							<img
								src={post.image}
								alt={post.title}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute top-4 left-4">
								<span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
									{post.category}
								</span>
							</div>
						</div>

						<div className="p-6">
							<div className="flex items-center gap-4 mb-4">
								<img
									src={post.author.avatar}
									alt={post.author.name}
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="text-sm font-medium">{post.author.name}</p>
									<p className="text-xs text-gray-400">
										{post.date} · {post.readTime}
									</p>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">
								{post.title}
							</h3>
							<p className="text-gray-400 text-sm mb-4 line-clamp-2">
								{post.excerpt}
							</p>

							<div className="flex flex-wrap gap-2">
								{post.tags.map((tag, index) => (
									<span
										key={index}
										className="text-xs px-2 py-1 bg-white/5 rounded-full"
									>
										#{tag}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</section>

			{/* Enhanced Blog Detail Modal */}
			{selectedBlog && (
				<div
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 blog-modal"
					onClick={handleBackdropClick}
				>
					<div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] rounded-2xl animate-modalEnter">
						{/* Enhanced Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group z-50"
							aria-label="Close modal"
						>
							<X
								size={24}
								className="transform group-hover:rotate-90 transition-transform duration-200"
							/>
						</button>

						{/* Modal content */}
						<div className="p-6 sm:p-8">
							<div className="relative h-[300px] -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6">
								<img
									src={selectedBlog.image}
									alt={selectedBlog.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1a1a1a] to-transparent">
									<span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
										{selectedBlog.category}
									</span>
								</div>
							</div>

							<div className="flex items-center gap-4 mb-6">
								<img
									src={selectedBlog.author.avatar}
									alt={selectedBlog.author.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<p className="font-medium">{selectedBlog.author.name}</p>
									<p className="text-sm text-gray-400">
										{selectedBlog.date} · {selectedBlog.readTime}
									</p>
								</div>
							</div>

							<h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>

							<div className="prose prose-invert max-w-none">
								<p className="text-gray-300 leading-relaxed mb-6">
									{selectedBlog.excerpt}
								</p>
								{/* Add more detailed content here */}
								<p className="text-gray-300 leading-relaxed mb-6">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris
									nisi ut aliquip ex ea commodo consequat.
								</p>
								<h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
								<ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
									<li>Understanding the fundamentals of AI integration</li>
									<li>Best practices for implementation</li>
									<li>Common challenges and solutions</li>
									<li>Future trends and opportunities</li>
								</ul>
							</div>

							<div className="flex flex-wrap gap-2 mt-6">
								{selectedBlog.tags.map((tag, index) => (
									<span
										key={index}
										className="text-sm px-3 py-1 bg-white/5 rounded-full"
									>
										#{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Call to Action */}
			<div className="mt-28 text-center bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-white/10 max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold mb-4 text-white drop-shadow-md">
					Want to Feature on Our Blog?
				</h2>
				<p className="text-gray-200 mb-6 leading-relaxed">
					We love sharing insights from the AI and dev community. Reach out if
					you'd like to contribute a guest post or showcase your innovative AI
					solutions.
				</p>
				<button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
					Contact Us
				</button>
			</div>

			{/* Featured Tags */}
			{/* <div className="mt-24">
				<h3 className="text-2xl font-bold mb-4 flex items-center gap-2 drop-shadow">
					<Tag size={20} />
					Featured Topics
				</h3>
				<div className="flex flex-wrap gap-4 text-sm">
					{['AI Agents', 'Chatbots', 'Prompt Engineering', 'Automation', 'OpenAI', 'LangChain'].map(
						(tag) => (
							<span
								key={tag}
								className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/20 transition"
							>
								{tag}
							</span>
						)
					)}
				</div>
			</div> */}

			{/* Newsletter */}
			<div className="mt-24 text-center bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/10 max-w-3xl mx-auto">
				<h3 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2 drop-shadow">
					<Mail size={20} />
					Join Our Newsletter
				</h3>
				<p className="text-gray-200 mb-4">
					Get the latest blog posts, tools, and AI tricks directly to your inbox.
				</p>
				<form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
					<input
						type="email"
						placeholder="Enter your email"
						className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-2/3"
					/>
					<button
						type="submit"
						className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
					>
						Subscribe
					</button>
				</form>
			</div>

			{/* About Company */}
			<div className="mt-24 border-t border-white/20 pt-10 text-center">
				<h4 className="text-xl font-semibold mb-3 drop-shadow">About GoRan</h4>
				<p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
					GoRan is your strategic partner in building AI-driven experiences — from
					custom websites and smart chatbots to full-blown AI workflows. We’re on a
					mission to democratize intelligent automation and deliver impact-driven
					digital solutions to startups, agencies, and enterprises.
				</p>
			</div>

			<style jsx global>{`
				@keyframes modalEnter {
					from {
						opacity: 0;
						transform: scale(0.95);
					}
					to {
						opacity: 1;
						transform: scale(1);
					}
				}

				.animate-modalEnter {
					animation: modalEnter 0.2s ease-out;
				}

				.fade-out {
					opacity: 0;
					transform: scale(0.95);
					transition: all 0.2s ease-out;
				}
			`}</style>
		</div>
	);
};

export default Blog;