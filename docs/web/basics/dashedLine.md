<c-title title="CSS控制虚线间距虚线长度" />

## 示例

::: info 源代码
<div class="dotted_line"></div>

```css
{
  margin: 26px 0 28px 0;
  width: 498px;
  padding: 1px 30px;
  box-sizing: border-box;
  background-image: linear-gradient(
    to right,
    #c2daff 35%,
    rgba(255, 255, 255, 0) 0%
  ); /* 35%设置虚线点x轴上的长度 */
  background-position: bottom; /* top配置上边框位置的虚线 */
  background-size: 10px 1px; /* 第一个参数设置虚线点的间距；第二个参数设置虚线点y轴上的长度 */
  background-repeat: repeat-x;
}
```
:::

<style lang="scss" scoped>
.dotted_line {
  margin: 26px 0 28px 0;
  width: 498px;
  padding: 1px 30px;
  box-sizing: border-box;
  background-image: linear-gradient(
    to right,
    #439EFF 35%,
    rgba(255, 255, 255, 0) 0%
  ); /* 35%设置虚线点x轴上的长度 */
  background-position: bottom; /* top配置上边框位置的虚线 */
  background-size: 10px 1px; /* 第一个参数设置虚线点的间距；第二个参数设置虚线点y轴上的长度 */
  background-repeat: repeat-x;
}
</style>
