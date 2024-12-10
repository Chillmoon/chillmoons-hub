import { Button, Select, TextInput } from "flowbite-react";

const SidebarForm = ({ sidebarData, dispatch, onSubmit }) => (
  <form className="flex flex-col gap-8" onSubmit={onSubmit}>
    <div className="flex items-center gap-2">
      <label className="whitespace-nowrap font-semibold">Search Term:</label>
      <TextInput
        placeholder="Search..."
        id="searchTerm"
        type="text"
        value={sidebarData.searchTerm}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "searchTerm",
            value: e.target.value,
          })
        }
      />
    </div>
    <div className="flex items-center gap-2">
      <label className="font-semibold">Sort:</label>
      <Select
        id="sort"
        value={sidebarData.sort}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "sort",
            value: e.target.value || "desc",
          })
        }
      >
        <option value="desc">Latest</option>
        <option value="asc">Oldest</option>
      </Select>
    </div>
    <div className="flex items-center gap-2">
      <label className="font-semibold">Category:</label>
      <Select
        id="category"
        value={sidebarData.category}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "category",
            value: e.target.value || "",
          })
        }
      >
        <option value="">All Categories</option>
        <option value="uncategorized">Uncategorized</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="front-end">Front-end</option>
        <option value="back-end">Back-end</option>
      </Select>
    </div>
    <Button type="submit" outline gradientDuoTone="greenToBlue">
      Apply Filters
    </Button>
  </form>
);

export default SidebarForm;
