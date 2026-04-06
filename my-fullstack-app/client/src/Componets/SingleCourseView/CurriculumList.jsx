import ContentListItem from "./ContentListItem.jsx";

function CurriculumList() {
    return (
        <div>
            {/* Row 1: Unlocked Sample Lesson */}
            <ContentListItem
                title="تحويل وحدات"
                topicCount="4 المواضيع"
                isSample={true}
                isLocked={false}
            />

            {/* Row 2: Locked Lesson */}
            <ContentListItem
                title="رسوم بيانية"
                topicCount="8 المواضيع"
                isSample={false}
                isLocked={true}
            />
        </div>
    );
}

export default CurriculumList;