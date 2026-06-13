const viewport = document.getElementById('viewport');
const content = document.getElementById('content');

let startY = 0;
let isPulling = false;

viewport.addEventListener('touchstart', (e) => {
  startY = e.touches[0].pageY;
  // Clear transitions during active dragging for immediate manual response
  content.style.transition = 'none'; 
});

viewport.addEventListener('touchmove', (e) => {
  const currentY = e.touches[0].pageY;
  const deltaY = currentY - startY;
  const scrollTop = viewport.scrollTop;
  const maxScroll = viewport.scrollHeight - viewport.clientHeight;

  // 1. Check if user is overscrolling at the Top Boundary
  if (scrollTop === 0 && deltaY > 0) {
    isPulling = true;
    content.style.transformOrigin = 'top center';
    
    // Apply a logarithmic resistance formula so stretching tightens up
    const stretchFactor = 1 + Math.log1p(deltaY * 0.003) * 0.15;
    content.style.transform = `scaleY(${stretchFactor})`;
    
    if (e.cancelable) e.preventDefault(); // Stop standard page shifts
  }
  
  // 2. Check if user is overscrolling at the Bottom Boundary
  else if (scrollTop >= maxScroll && deltaY < 0) {
    isPulling = true;
    content.style.transformOrigin = 'bottom center';
    
    const pullDistance = Math.abs(deltaY);
    const stretchFactor = 1 + Math.log1p(pullDistance * 0.003) * 0.15;
    content.style.transform = `scaleY(${stretchFactor})`;
    
    if (e.cancelable) e.preventDefault();
  }
}, { passive: false });

// Snap back to normal when the interaction ends
viewport.addEventListener('touchend', () => {
  if (isPulling) {
    isPulling = false;
    // Re-enable smooth transition curve
    content.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; 
    content.style.transform = 'scaleY(1)'; // Snap back
  }
});
