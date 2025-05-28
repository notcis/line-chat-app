import ItemList from "@/components/shared/item-list/item-list";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ItemList title="Conversations">Conversations Page</ItemList>
      {children}
    </>
  );
}
