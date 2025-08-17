// app/components/MainMenu.tsx
"use client";

import { NAV, NavItem } from "./nav-data";
import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

interface MainMenuProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export default function MainMenu({ isMobile, onClose }: MainMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Desktop hover logic
  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenIndex(index);
    setOpenSubIndex(null); // Reset sub-menu on main menu hover
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
      setOpenSubIndex(null);
    }, 500);
  };

  // Mobile click logic
  const handleMobileClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
    setOpenSubIndex(null);
  };

  const handleMobileSubClick = (subIndex: number) => {
    if (openSubIndex === subIndex) {
      setOpenSubIndex(null);
    } else {
      setOpenSubIndex(subIndex);
    }
  };

  // Common link click handler
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  // Render method based on device type
  if (isMobile) {
    return (
      <nav className="text-black">
        <ul className="flex flex-col space-y-2 py-4">
          {NAV.map((item, index) => (
            <li key={index}>
              <div
                className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleMobileClick(index)}
              >
                <Link
                  href={item.href || "#"}
                  className="flex-1"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <span className="text-gray-500 ml-2">
                    {openIndex === index ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                )}
              </div>
              {item.children && openIndex === index && (
                <ul className="bg-gray-50 flex flex-col pl-4 space-y-2 py-2">
                  {item.children.map((child, subIndex) => (
                    <li key={subIndex}>
                      <div
                        className="flex justify-between items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleMobileSubClick(subIndex)}
                      >
                        <Link
                          href={child.href || "#"}
                          className="flex-1"
                          onClick={handleLinkClick}
                        >
                          {child.label}
                        </Link>
                        {child.children && child.children.length > 0 && (
                          <span className="text-gray-500 ml-2">
                            {openSubIndex === subIndex ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ChevronRight size={16} />
                            )}
                          </span>
                        )}
                      </div>
                      {child.children && openSubIndex === subIndex && (
                        <ul className="bg-gray-100 flex flex-col pl-4 space-y-2 py-2">
                          {child.children.map((subChild, i) => (
                            <li key={i}>
                              <Link
                                href={subChild.href || "#"}
                                className="block px-4 py-2 hover:bg-gray-200 text-sm"
                                onClick={handleLinkClick}
                              >
                                {subChild.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Desktop render
  return (
    <nav className="relative bg-white text-black">
      <ul className="flex gap-8 px-6 py-4 text-sm font-medium">
        {NAV.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href || "#"}
              className="cursor-pointer hover:text-green-600"
            >
              {item.label}
            </Link>

            {item.children &&
              item.children.length > 0 &&
              openIndex === index && (
                <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg border border-gray-100 rounded-md z-50">
                  {item.children.map((child, i) => (
                    <DesktopDropdownItem
                      key={i}
                      item={child}
                      setOpenSubIndex={setOpenSubIndex}
                    />
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Desktop-only dropdown item component
function DesktopDropdownItem({
  item,
  setOpenSubIndex,
}: {
  item: NavItem;
  setOpenSubIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
    // This is to keep the parent open when a child is hovered
    setOpenSubIndex(1); // Any non-null value
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setOpenSubIndex(null);
    }, 500);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        <Link href={item.href || "#"} className="block w-full">
          <span>{item.label}</span>
        </Link>
        {item.children && item.children.length > 0 && (
          <span className="text-gray-500">
            <ChevronRight size={16} />
          </span>
        )}
      </div>

      {item.children && item.children.length > 0 && open && (
        <ul className="absolute ml-1 left-full top-0 w-56 bg-white shadow-lg border border-gray-100 rounded-md z-50">
          {item.children.map((sub, i) => (
            <li key={i}>
              <Link
                href={sub.href || "#"}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
