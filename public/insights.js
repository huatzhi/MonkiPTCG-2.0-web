document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 付费墙功能
    const purchaseBtn = document.getElementById('purchaseBtn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', function() {
            // 这里将来会集成Stripe支付
            console.log('购买文章');
            
            // 模拟支付成功
            const paywall = document.getElementById('paywall');
            const fullContent = document.getElementById('fullContent');
            if (paywall && fullContent) {
                paywall.style.display = 'none';
                fullContent.classList.remove('hidden');
            }
        });
    }

    // 文章筛选功能
    const filterButton = document.querySelector('.filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            const typeFilter = document.getElementById('filter-type').value;
            const authorFilter = document.getElementById('filter-author').value;
            const sortFilter = document.getElementById('filter-sort').value;
            
            console.log('筛选条件:', {
                type: typeFilter,
                author: authorFilter,
                sort: sortFilter
            });
            
            // 这里将来会实现实际的筛选逻辑
            // 模拟筛选效果
            const articleCards = document.querySelectorAll('.article-card');
            articleCards.forEach(card => {
                // 根据筛选条件显示/隐藏文章卡片
                // 这里只是一个简单的示例
                if (typeFilter !== 'all') {
                    const isPaid = card.querySelector('.article-price').classList.contains('paid');
                    if ((typeFilter === 'paid' && !isPaid) || (typeFilter === 'free' && isPaid)) {
                        card.style.display = 'none';
                        return;
                    }
                }
                
                if (authorFilter !== 'all') {
                    // 实际应用中需要检查作者信息
                    // 这里简化处理
                }
                
                card.style.display = 'block';
            });
        });
    }

    // 分页功能
    const pageButtons = document.querySelectorAll('.page-btn');
    if (pageButtons.length > 0) {
        pageButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // 移除所有按钮的active类
                pageButtons.forEach(b => b.classList.remove('active'));
                
                // 为当前点击的按钮添加active类
                this.classList.add('active');
                
                // 这里将来会实现实际的分页逻辑
                console.log('切换到页面:', this.textContent);
            });
        });
    }

    // 评论功能
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const commentText = this.querySelector('textarea').value.trim();
            if (!commentText) return;
            
            // 这里将来会集成Firebase数据库存储评论
            console.log('提交评论:', commentText);
            
            // 模拟添加评论
            const commentsList = document.querySelector('.comments-list');
            if (commentsList) {
                const newComment = createCommentElement({
                    author: {
                        name: '当前用户',
                        avatar: 'https://via.placeholder.com/40'
                    },
                    date: new Date().toLocaleDateString(),
                    content: commentText,
                    likes: 0,
                    replies: []
                });
                
                commentsList.prepend(newComment);
                this.querySelector('textarea').value = '';
                
                // 更新评论计数
                updateCommentsCount();
            }
        });
    }

    // 创建评论元素
    function createCommentElement(comment) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        
        commentElement.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <img src="${comment.author.avatar}" alt="${comment.author.name}" class="comment-author-avatar">
                    <span class="comment-author-name">${comment.author.name}</span>
                </div>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-content">
                ${comment.content}
            </div>
            <div class="comment-actions">
                <div class="comment-action like-action">
                    <i class="far fa-heart"></i>
                    <span class="like-count">${comment.likes}</span>
                </div>
                <div class="comment-action reply-action">
                    <i class="far fa-comment"></i>
                    <span>回复</span>
                </div>
            </div>
            <div class="replies">
                ${comment.replies.map(reply => createReplyElement(reply)).join('')}
            </div>
            <div class="reply-form">
                <textarea placeholder="写下你的回复..."></textarea>
                <div class="reply-form-actions">
                    <button class="cancel-reply">取消</button>
                    <button class="submit-reply">回复</button>
                </div>
            </div>
        `;
        
        // 添加点赞功能
        const likeAction = commentElement.querySelector('.like-action');
        if (likeAction) {
            likeAction.addEventListener('click', function() {
                const likeIcon = this.querySelector('i');
                const likeCount = this.querySelector('.like-count');
                
                if (likeIcon.classList.contains('far')) {
                    likeIcon.classList.remove('far');
                    likeIcon.classList.add('fas');
                    this.classList.add('liked');
                    likeCount.textContent = parseInt(likeCount.textContent) + 1;
                } else {
                    likeIcon.classList.remove('fas');
                    likeIcon.classList.add('far');
                    this.classList.remove('liked');
                    likeCount.textContent = parseInt(likeCount.textContent) - 1;
                }
            });
        }
        
        // 添加回复功能
        const replyAction = commentElement.querySelector('.reply-action');
        const replyForm = commentElement.querySelector('.reply-form');
        const cancelReply = commentElement.querySelector('.cancel-reply');
        const submitReply = commentElement.querySelector('.submit-reply');
        
        if (replyAction && replyForm) {
            replyAction.addEventListener('click', function() {
                replyForm.classList.add('active');
            });
        }
        
        if (cancelReply) {
            cancelReply.addEventListener('click', function() {
                replyForm.classList.remove('active');
                replyForm.querySelector('textarea').value = '';
            });
        }
        
        if (submitReply) {
            submitReply.addEventListener('click', function() {
                const replyText = replyForm.querySelector('textarea').value.trim();
                if (!replyText) return;
                
                // 这里将来会集成Firebase数据库存储回复
                console.log('提交回复:', replyText);
                
                // 模拟添加回复
                const repliesContainer = commentElement.querySelector('.replies');
                if (repliesContainer) {
                    const newReply = createReplyElement({
                        author: {
                            name: '当前用户',
                            avatar: 'https://via.placeholder.com/40'
                        },
                        date: new Date().toLocaleDateString(),
                        content: replyText
                    });
                    
                    repliesContainer.appendChild(newReply);
                    replyForm.classList.remove('active');
                    replyForm.querySelector('textarea').value = '';
                    
                    // 更新评论计数
                    updateCommentsCount();
                }
            });
        }
        
        return commentElement;
    }

    // 创建回复元素
    function createReplyElement(reply) {
        const replyElement = document.createElement('div');
        replyElement.className = 'reply';
        
        replyElement.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <img src="${reply.author.avatar}" alt="${reply.author.name}" class="comment-author-avatar">
                    <span class="comment-author-name">${reply.author.name}</span>
                </div>
                <span class="comment-date">${reply.date}</span>
            </div>
            <div class="comment-content">
                ${reply.content}
            </div>
        `;
        
        return replyElement;
    }

    // 更新评论计数
    function updateCommentsCount() {
        const commentsCount = document.querySelector('.comments-count');
        if (commentsCount) {
            const comments = document.querySelectorAll('.comment').length;
            const replies = document.querySelectorAll('.reply').length;
            commentsCount.textContent = comments + replies;
        }
    }

    // 初始化评论计数
    updateCommentsCount();
});
