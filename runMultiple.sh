#!/bin/bash

output_file=full_list.txt

list="3595 3594 3593 3592 3591 3590 3589 3588 3587 3586 3585 3584 3583 3582 3581 3580 3579 3578 3577 3576 3575 3574 3573 3572 3571 3570 3569 3568 3567 3566 3565 3564 3563 3562 3561 3560 3559 3558 3557 3556 3555 3554 3553 3552 3551 3550 3549 3548 3547 3546 3545 3544 3543 3542 3541 3540 3539 3538 3537 3536 3535 3534 3533 3532 3531 3530 3529 3528 3527 3526 3525 3524 3523 3522 3521 3520 3519 3518 3517 3516 3515 3514 3513 3512 3511 3510 3509 3508 3507 3506 3505 3504 3503 3502 3501 3500 3499 3498 3497 3496 3495 3494 3493 3492 3491 3490 3489"

for item in $list
do
   ./history-generator-app -s 2019-11-01 -t ${item}
done

files="$(ls | grep .txt)"

touch ${output_file}

for file in $files
do
  cat $file >> ${output_file}
  rm $file
done


echo "Output saved to ${output_file}"

