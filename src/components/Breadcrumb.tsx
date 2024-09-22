import { useLocation } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";

export function Breadcrumb () {
        const pathnames = useLocation().pathname.split('/').filter(x => x);
        // Breadcrumb öğelerini oluşturmak için
        const breadcrumbItems = pathnames.map((pathname) => {
            return {
                label: pathname.charAt(0).toUpperCase() + pathname.slice(1), // İlk harfi büyük yapar
            };
        });

        // Breadcrumb öğelerinin başına anasayfa öğesini eklemek için
        const items = [{ label: 'Home' }, ...breadcrumbItems];

        return (
            <div className="p-4">
                <BreadCrumb
                    model={items.map(item => ({ label: item.label }))}
                    className="p-mb-3"
                />
            </div>
        )
}