Make a single React.JS page that is an event log viewer that reads in the attached sample JSON file. Think of it as a tool that a system admin would use to keep an eye on the performance of the SKU Ninja system.

The JSON data format is an array of sample records from the last several days. Each log record has multiple fields, but I want this tool to show the following information:

* date & time of the event

* subject of the event

The entries should be displayed in a table type of layout, each row is 1 event. There should be a color applied to the row depending on the type for that entry.
Type:
1. Normal (green)
2. Warning (yellow)
3. Error (red)

Clicking on an event should cause a popup modal to appear with the body of the event displayed.

You can use Twitter Bootstrap for the layout and colors. Be as creative as you want, style counts.

Bonus points, for any other extra functionality to make this tool more useful (ie. jQuery plugin to sort the columns, or filter the row, etc).