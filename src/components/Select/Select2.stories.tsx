import React, {useState} from 'react';
import {ItemType, Select2} from "./Select2";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select2',
    component: Select2
}

export const SelectOpen = () => <Select2 onChange={action('Value changed')}
                     value={1}
                     item={[
                         {title: 'Name 1', value: 1},
                         {title: 'Name 2', value: 2},
                         {title: 'Name 3', value: 3},
                         {title: 'Name 4', value: 4},
                     ]}/>
