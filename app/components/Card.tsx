type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
}

