import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function ExerciseTabs(props) {
  const children = React.Children.toArray(props.children);
  return (
    <Tabs>
        {children.map((child, index) => (
            <TabItem value={"E" + (index + 1)} label={"E" + (index + 1)}>
              {child}
            </TabItem>
        ))}
    </Tabs>
  );
}