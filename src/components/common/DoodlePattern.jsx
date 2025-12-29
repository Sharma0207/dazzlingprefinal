export default function DoodlePattern() {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F1fcc1bf089804dbcb25502fab34b5e07%2Fd7c37c6309f34a85a1dc6de771b7eea5?format=webp&width=1440')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        opacity: 0.75,
      }}
    />
  );
}
