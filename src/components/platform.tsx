const platform = "github";
const username = "withastro";
<Fragment>
<footer>
<p>
Learn more about my projects on <a href={`https://www.${platform}.com/${username}`}>{platform}</a>!
</p>
</footer>

</Fragment>;
export default function Footer(_props: Record<string, any>): any { }
