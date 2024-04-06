import Image from 'next/image'
import {youngSerif} from '@/app/fonts'

export const RecipePage = () => {
    return (
        <div className='bg-white p-10 md:rounded-xl flex flex-col gap-y-7 md:w-6/12 w-full md:my-10 text-dark-charcoal'>
            <Image
                src='/image-omelette.jpeg'
                className='rounded-lg'
                width={1000}
                height={800}
                alt='omelette'
                priority
            />

            <div className='flex flex-col gap-y-5'>
                <h1 className={`text-4xl font-young-serif ${youngSerif.className}`}>
                    Simple Omelette Recipe
                </h1>
                <p>A simple and quick dish, perfect for any meal. This classic omelette combines beaten eggs
                    cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </div>

            <div className='bg-rose-white p-5 rounded-lg gap-y-3 flex flex-col'>
                <h3 className='text-dark-raspberry font-bold text-xl'>Preparation time</h3>
                <ul className='list-disc m-2 marker:text-xs ml-4'>
                    <li><b>Total</b>: Aproximately 10 minutes</li>
                    <li><b>Preparation</b>: 5 minutes</li>
                    <li><b>Cooking</b>: 5 minutes</li>
                </ul>
            </div>

            <div className='flex flex-col gap-y-3'>
                <h2 className={`text-nutmeg text-3xl ${youngSerif.className}`}>Ingredients</h2>
                <ul className='list-disc m-2 marker:text-xs ml-4'>
                    <li>2-3 large eggs</li>
                    <li>Salt, to taste</li>
                    <li>Pepper, to taste</li>
                </ul>
            </div>

            <hr />

            <div className='flex flex-col gap-y-3'>
                <h2 className={`text-nutmeg text-3xl ${youngSerif.className}`}>Instructions</h2>
                <ol className='list-decimal m-2 marker:font-semibold marker:text-nutmeg'>
                    <li><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until
                        they are well mixed. You can add a tablespoon of water or milk for a fluffier expirience.
                    </li>
                    <li><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.
                    </li>
                    <li><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until
                        they are well mixed. You can add a tablespoon of water or milk for a fluffier expirience.
                    </li>
                </ol>
            </div>

            <hr />

            <div className='flex flex-col gap-y-3'>
                <h2 className={`text-nutmeg text-3xl ${youngSerif.className}`}>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>

                <table>
                    <tbody>
                        <tr><td className='table-header'>Calories</td><td className='table-content'>277kcal</td></tr>
                        <tr><td className='table-header'>Carbs</td> <td className='table-content'>0g</td></tr>
                        <tr><td className='table-header'>Proteins</td> <td className='table-content'>20g</td></tr>
                        <tr><td className='table-header'>Fat</td> <td className='table-content'>22g</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
