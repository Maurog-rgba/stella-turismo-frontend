import { ImageWithFallback } from './ui/ImageWithFallback';

interface FeaturedSectionCardProps {
  image: string;
  title: string;
  subtitle?: string;
  dateStart?: string;
  dateEnd?: string;
  priceLabel?: string;
  priceValue?: string;
  priceInstallment?: string;
  icon?: React.ReactNode;
}

export function FeaturedSectionCard({
  image,
  title,
  subtitle,
  dateStart,
  dateEnd,
  priceLabel,
  priceValue,
  priceInstallment,
  icon,
}: FeaturedSectionCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg shrink-0 w-48 md:w-64 border border-gray-100 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="h-40 w-full overflow-hidden rounded-t-3xl">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col h-[220px]">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <span className="font-semibold text-lg text-black">{title}</span>
        </div>
        {subtitle && <div className="text-sm text-gray-500 mb-1">{subtitle}</div>}
        {dateStart && <div className="text-xs text-gray-500 mb-1">Ida: {dateStart}</div>}
        {dateEnd && <div className="text-xs text-gray-500 mb-2">Volta: {dateEnd}</div>}
        <div className="mt-auto">
          {priceLabel && <div className="text-xs text-gray-400 mb-1">{priceLabel}</div>}
          {priceValue && <div className="text-2xl font-bold text-black mb-2">{priceValue}</div>}
          {priceInstallment && <div className="text-xs text-center text-gray-500">{priceInstallment}</div>}
        </div>
      </div>
    </div>
  );
}
