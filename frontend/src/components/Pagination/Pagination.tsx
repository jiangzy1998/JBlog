
export interface PaginationProps {
  total: number,
  current: number,
  onChange?: (page: number, pageSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total
}) => {
  const items = Array.from({ length: total  }, (_, index) => index);
  return (
    <ul className="jzy-pagination">
      {/* 前进按钮 */}
      <li title="上一页" className="jzy-pagination-prev">
        <button className="jzy-pagination-item-link">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
          </svg>
        </button>
      </li>

      {items.map((item, index) => (
        <li className="jzy-pagination-item" key={index}><a>{index + 1}</a></li>
      ))}

      {/* 后退按钮 */}
      <li title="下一页" className="jzy-pagination-next">
        <button className="jzy-pagination-item-link">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </button>
      </li>
    </ul>
  )
}


export default Pagination;