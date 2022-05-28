import React from "react";
import { getPagesArr } from "../../../utils/pages";

const Plagination = ({ totalPages, changePage, page }) => {
    const pagesArr = getPagesArr(totalPages);

    return (
        <div className="plagination">
            {pagesArr.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={
                        page === p
                            ? "plagination__page plagination__page-active"
                            : "plagination__page"
                    }
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default Plagination;
