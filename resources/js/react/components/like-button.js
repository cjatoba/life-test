function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this';
  }

  return React.createElement(
    'button',
    {
      onclick: () => setLiked(true),
    },
    'Like'
  );
}